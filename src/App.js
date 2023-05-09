import "./App.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });
  const [result, setResult] = useState();
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleChange = (e) => {
    const names = e.target.name;
    const name = e.target.options[e.target.selectedIndex].getAttribute("name");
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [names]: {
        ...prev[names],
        [name]: value,
      },
    }));
  };

  const handleButon = () => {
    setResult(data);
  };
  const jsonData = JSON.stringify(result);

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Aspek penilaian 1</TableCell>
              <TableCell>Aspek penilaian 2</TableCell>
              <TableCell>Aspek penilaian 3</TableCell>
              <TableCell>Aspek penilaian 4</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, indexs) => (
              <TableRow key={indexs}>
                <TableCell>{`mahasiswa${item}`}</TableCell>
                <TableCell>
                  <select
                    name="aspek_penilaian_1"
                    onChange={(e) => handleChange(e)}
                  >
                    {items.map((item, index) => (
                      <option
                        name={`mahasiswa_${indexs + 1}`}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <select
                    name="aspek_penilaian_2"
                    onChange={(e) => handleChange(e)}
                  >
                    {items.map((item, index) => (
                      <option
                        name={`mahasiswa_${indexs + 1}`}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <select
                    name="aspek_penilaian_3"
                    onChange={(e) => handleChange(e)}
                  >
                    {items.map((item, index) => (
                      <option
                        name={`mahasiswa_${indexs + 1}`}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <select
                    name="aspek_penilaian_4"
                    onChange={(e) => handleChange(e)}
                  >
                    {items.map((item, index) => (
                      <option
                        name={`mahasiswa_${indexs + 1}`}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* </form> */}
                </TableCell>
              </TableRow>
            ))}
            <TableRow align="right">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleButon}
                >
                  Simpan
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h2>Result</h2>
      <p>{jsonData}</p>
    </div>
  );
}

export default App;
