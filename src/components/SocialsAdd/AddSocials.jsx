import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from "@mui/material";

const AddSocials = ({ open, handleClose, handleSave }) => {
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleSaveSocials = () => {
    handleSave({ twitter, instagram });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add Your Social Media Links</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Twitter"
              fullWidth
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instagram"
              fullWidth
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSaveSocials} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSocials;