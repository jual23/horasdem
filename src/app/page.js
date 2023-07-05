"use client";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Switch from "@mui/joy/Switch";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

export default function Home() {
  const [log, setLog] = useState({
    fecha: null,
    fotografo: null,
    horas: null,
    canchas: 2,
    liga: null,
    compartida: false,
  });

  const cambiarFecha = (newValue) => {
    setLog({ ...log, fecha: newValue });
  };

  const cambiarLiga = (event, newValue) => {
    setLog({ ...log, liga: newValue });
    console.log(log);
  };

  return (
    <main className="min-h-screen flex items-stretch justify-around">
      <form className="h-3/4 flex-none basis-3/4">
        <Typography level="h1" fontSize="xl" className="my-2">
          Registro de horas
        </Typography>
        <Typography level="h2" fontSize="xl" className="my-2">
          Fecha
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={cambiarFecha} />
        </LocalizationProvider>
        <Typography level="h2" fontSize="xl" className="my-2">
          Fotógrafo
        </Typography>
        <Select color="primary" placeholder="Choose one…" variant="solid">
          <Option value="Juan Orlando">Juan Orlando</Option>
          <Option value="Eduardo Herrera">Eduardo Herrera</Option>
        </Select>

        <Typography level="h2" fontSize="xl" className="my-2">
          Liga
        </Typography>
        <Select
          color="primary"
          placeholder="Choose one…"
          variant="solid"
          onChange={cambiarLiga}
        >
          <Option value="lpk">LPK</Option>
          <Option value="venao">Venao</Option>
        </Select>
        <Typography level="h2" fontSize="xl" className="my-2">
          Numero de canchas
        </Typography>
        <RadioGroup
          className="flex my-3"
          defaultValue="2"
          name="radio-buttons-group"
        >
          <Radio
            color="primary"
            orientation="horizontal"
            size="md"
            variant="solid"
            slotProps={{ input: { "aria-label": "1" } }}
            value="1"
            label="1"
          />
          <Radio
            color="primary"
            orientation="horizontal"
            size="md"
            variant="solid"
            slotProps={{ input: { "aria-label": "2" } }}
            value="2"
            label="2"
          />
          <Radio
            className="my-2"
            color="primary"
            orientation="horizontal"
            size="md"
            variant="solid"
            slotProps={{ input: { "aria-label": "3" } }}
            value="3"
            label="3"
          />
        </RadioGroup>
        <Typography level="h2" fontSize="xl" className="my-2">
          Compartidas
        </Typography>
        <Switch className="inline my-1.5" />
        <Button
          className="bg-blue-600 my-3"
          size="md"
          variant="solid"
          color="primary"
        >
          Enviar
        </Button>
      </form>
    </main>
  );
}
