import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Professional() {
  const { content, updateProfessionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateProfessionalData(data);
    setBtnText("Update");
  };
  return (
    <div className="">
      <h4 style={{textAlign: "center"}}>Professional Experience</h4>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >






      <button 
      class="btn btn-primary" 
      type="button" data-toggle="collapse" 
      data-target="#collapseExample" 
      aria-expanded="false" 
      aria-controls="collapseExample"
      variant="contained"
      color="secondary"
      type="submit"
      style={{ color: "#0298B8", background: "white", border: "none" }}
      >
      ~ Add First Experience
    </button>
    <div class="collapse" id="collapseExample">
     <div class="card card-body">
        <TextField
          id="outlined-basic"
          label="Company"
          name="company1"
          variant="outlined"
          defaultValue={content.professional.company1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local1"
          variant="outlined"
          defaultValue={content.professional.local1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position1"
          variant="outlined"
          defaultValue={content.professional.position1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start1"
          variant="outlined"
          defaultValue={content.professional.start1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end1"
          variant="outlined"
          defaultValue={content.professional.end1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[0]"
          variant="outlined"
          defaultValue={content.professional.desc1[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[1]"
          variant="outlined"
          defaultValue={content.professional.desc1[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[2]"
          variant="outlined"
          defaultValue={content.professional.desc1[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />
        </div>
        </div>

        <hr />






        <button 
        class="btn btn-primary" 
        type="button" data-toggle="collapse" 
        data-target="#collapseExample2" 
        aria-expanded="false" 
        aria-controls="collapseExample"
        variant="contained"
        color="secondary"
        type="submit"
        style={{ color: "#0298B8", background: "white", border: "none" }}
        >
        ~ Add Second Experience
      </button>

    <div class="collapse" id="collapseExample2">
     <div class="card card-body">
        <TextField
          id="outlined-basic"
          label="Company"
          name="company2"
          variant="outlined"
          defaultValue={content.professional.company2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local2"
          variant="outlined"
          defaultValue={content.professional.local2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position2"
          variant="outlined"
          defaultValue={content.professional.position2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start2"
          variant="outlined"
          defaultValue={content.professional.start2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end2"
          variant="outlined"
          defaultValue={content.professional.end2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[0]"
          variant="outlined"
          defaultValue={content.professional.desc2[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[1]"
          variant="outlined"
          defaultValue={content.professional.desc2[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[2]"
          variant="outlined"
          defaultValue={content.professional.desc2[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        </div>
        </div>


        <hr />









        <button 
        class="btn btn-primary" 
        type="button" data-toggle="collapse" 
        data-target="#collapseExample3" 
        aria-expanded="false" 
        aria-controls="collapseExample"
        variant="contained"
        color="secondary"
        type="submit"
        style={{ color: "#0298B8", background: "white", border: "none" }}
        >
        ~ Add Third Experience
      </button>

    <div class="collapse" id="collapseExample3">
     <div class="card card-body">        
     <TextField
          id="outlined-basic"
          label="Company"
          name="company3"
          variant="outlined"
          defaultValue={content.professional.company3}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local3"
          variant="outlined"
          defaultValue={content.professional.local3}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position3"
          variant="outlined"
          defaultValue={content.professional.position3}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start3"
          variant="outlined"
          defaultValue={content.professional.start3}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end3"
          variant="outlined"
          defaultValue={content.professional.end3}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc3[0]"
          variant="outlined"
          defaultValue={content.professional.desc3[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc3[1]"
          variant="outlined"
          defaultValue={content.professional.desc3[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc3[2]"
          variant="outlined"
          defaultValue={content.professional.desc3[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        </div>
        </div>


        <hr />







        <button 
        class="btn btn-primary" 
        type="button" data-toggle="collapse" 
        data-target="#collapseExample4" 
        aria-expanded="false" 
        aria-controls="collapseExample"
        variant="contained"
        color="secondary"
        type="submit"
        style={{ color: "#0298B8", background: "white", border: "none" }}
        >
        ~ Add Fourth Experience
      </button>

    <div class="collapse" id="collapseExample4">
     <div class="card card-body">
       <TextField
          id="outlined-basic"
          label="Company"
          name="company4"
          variant="outlined"
          defaultValue={content.professional.company4}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local4"
          variant="outlined"
          defaultValue={content.professional.local4}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position4"
          variant="outlined"
          defaultValue={content.professional.position4}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start4"
          variant="outlined"
          defaultValue={content.professional.start4}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end4"
          variant="outlined"
          defaultValue={content.professional.end4}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc4[0]"
          variant="outlined"
          defaultValue={content.professional.desc4[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc4[1]"
          variant="outlined"
          defaultValue={content.professional.desc4[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc4[2]"
          variant="outlined"
          defaultValue={content.professional.desc4[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </div>
      </div>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default Professional;
