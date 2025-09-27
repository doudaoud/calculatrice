import "./App.css";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: "black",
          backgroundColor: "white",
          height: "500px",
          width: "300px",
          borderRadius: "20px",
        }}
      >
        <input
          className="text-feild"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            height: "100px",
            width: "99%",
            borderRadius: "20px",
            border: "none",
            fontSize: "30px",
            backgroundColor: "white",
            color: "black",
            marginBottom: "20px",
          }}
          readOnly
        />
        {/* la partie des buttons  */}
        <div className="buttons">
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(251, 213, 10)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput("")}
            >
              AC
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(251, 213, 10)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => {
                Number(input) < 0
                  ? setInput(input.slice(1))
                  : setInput("-" + input);
              }}
            >
              +/-
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(251, 213, 10)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => {
                setInput(input + "%");
              }}
            >
              %
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(254, 147, 37)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "/")}
            >
              ÷
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "7")}
            >
              7
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => {
                setInput(input + "8");
              }}
            >
              8
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => {
                setInput(input + "9");
              }}
            >
              9
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(254, 147, 37)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "*")}
            >
              ×
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "4")}
            >
              4
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "5")}
            >
              5
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "6")}
            >
              6
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(254, 147, 37)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "-")}
            >
              -
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "1")}
            >
              1
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "2")}
            >
              2
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "3")}
            >
              3
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(254, 147, 37)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "+")}
            >
              +
            </Button>
          </div>
          <Grid item sx={{ gridColumn: "1 / 3" }}>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "140px",
                borderRadius: "40px",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + "0")}
            >
              0
            </Button>
          </Grid>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(204, 204, 204)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => setInput(input + ".")}
            >
              ,
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(254, 147, 37)",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => {
                setInput(evaluate(input)) 
              }}
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
