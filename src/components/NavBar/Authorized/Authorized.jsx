import React from 'react'
import ComponentText from '../../CustomComponents/ComponentText/ComponentText';
import { Box, Avatar } from '@mui/material';
import { Colors } from '../../../theme/Colors/Colors';

const Authorized = () => {
  return (
    <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <ComponentText
                style={{
                  color: Colors.colorBlack,
                  marginBottom: 0,
                }}
              >
                Алексей А.
              </ComponentText>

              <button
                style={{
                  fontFamily: "Inter",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginTop: 0,
                }}
              >
                Выйти
              </button>
            </div>
            <Avatar />
          </Box>
  )
}

export { Authorized }