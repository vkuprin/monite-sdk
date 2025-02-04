import React, { DragEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useFileInput, useMenuButton } from '@/core/hooks';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { alpha, Box, Button, Menu, Stack, Typography } from '@mui/material';

interface CreatePayableMenuProps {
  isCreateAllowed: boolean;
  onCreateInvoice: () => void;
  handleFileUpload: (file: File | FileList) => void;
}

export const CreatePayableMenu = ({
  isCreateAllowed,
  onCreateInvoice,
  handleFileUpload,
}: CreatePayableMenuProps) => {
  const { i18n } = useLingui();
  const { buttonProps, menuProps, open, closeMenu } = useMenuButton();
  const { FileInput, openFileInput } = useFileInput();
  const [dragIsOver, setDragIsOver] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files);
    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/tiff',
    ];

    droppedFiles.forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        toast.error(t(i18n)`Unsupported file format for ${file.name}`);
        return;
      }

      handleFileUpload(file);
    });

    closeMenu();
  };

  return (
    <>
      <Button
        {...buttonProps}
        variant="contained"
        disabled={!isCreateAllowed}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {t(i18n)`Add new bill`}
      </Button>
      <Menu {...menuProps} sx={{ '& > .MuiPaper-root': { width: 550 } }}>
        <Stack
          spacing={3}
          flexDirection="column"
          sx={{ p: 2, width: 550 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Box>
            <Typography variant="subtitle1" mb={1}>
              {t(i18n)`Upload files`}
            </Typography>
            <Box
              sx={{
                boxSizing: 'border-box',
                cursor: 'pointer',
                width: '100%',
                height: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                border: 2,
                borderRadius: 2,
                borderStyle: 'dashed',
                borderColor: 'primary.main',
                ...(dragIsOver
                  ? { backgroundColor: 'transparent' }
                  : {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.05),
                    }),
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => openFileInput()}
            >
              <Box
                sx={{
                  margin: 'auto',
                }}
              >
                <CloudUploadOutlinedIcon color="primary" fontSize="large" />
                <Typography color="primary" variant="subtitle2">
                  {t(i18n)`Drag and drop files or click to upload`}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t(i18n)`(.pdf, .png, .jpg supported)`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" mb={1}>
              {t(i18n)`Or add bill manually`}
            </Typography>
            <Box flex={0}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                onClick={() => {
                  closeMenu();
                  onCreateInvoice();
                }}
              >
                {t(i18n)`Add new bill`}
              </Button>
            </Box>
          </Box>
        </Stack>
      </Menu>
      <FileInput
        accept="application/pdf, image/png, image/jpeg, image/tiff"
        aria-label={t(i18n)`Upload payable files`}
        multiple
        onChange={(event) => {
          const files = event.target.files;
          console.debug('Files selected:', files);

          if (files) handleFileUpload(files);
          closeMenu();
        }}
      />
    </>
  );
};
