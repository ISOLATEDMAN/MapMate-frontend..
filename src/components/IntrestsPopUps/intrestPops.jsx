import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip, Grid } from "@mui/material";

const interestsList = [
  "Tech",
  "Travel",
  "Music",
  "Fitness",
  "Art",
  "Gaming",
  "Food",
  "Sports",
  "Photography",
  "Movies",
];


const InterestsModal = ({ open, handleClose, handleSave }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
  
    const toggleInterest = (interest) => {
      if (selectedInterests.includes(interest)) {
        setSelectedInterests(selectedInterests.filter((item) => item !== interest));
      } else if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    };
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Select Your Top 5 Interests</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {interestsList.map((interest, index) => (
              <Grid item key={index}>
                <Chip
                  label={interest}
                  clickable
                  color={selectedInterests.includes(interest) ? "primary" : "default"}
                  onClick={() => toggleInterest(interest)}
                />
              </Grid>
            ))}
          </Grid>
          <p style={{ marginTop: "1rem" }}>
            {selectedInterests.length}/5 Selected
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSave(selectedInterests);
              handleClose();
            }}
            color="primary"
            disabled={selectedInterests.length !== 5}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  
  export default InterestsModal;