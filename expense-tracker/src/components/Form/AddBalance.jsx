import React, { useState } from "react";
import { useSnackbar } from "notistack";
import Button from "../Button";
import './AddBalance.css';

const AddBalanceForm = ({ setIsOpen, setBalance }) => {
  const [income, setIncome] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(income) < 0) {
      enqueueSnackbar("Please add balance greater then 0.", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }

    setBalance((prev) => prev + Number(income));
    setIsOpen(false);
  };
  return (
    <div className="form">
      <h3>Add Balance</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Add Balance"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />

        <Button type="submit" style="primary" shadow>
          Add Balance
        </Button>
        <Button style="secondary" shadow handleClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default AddBalanceForm;
