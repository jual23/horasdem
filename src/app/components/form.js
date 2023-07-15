"use client";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Switch from "@mui/joy/Switch";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default async function form({ photos, ligas }) {
  const [log, setLog] = useState({
    fecha: null,
    fotografo: "",
    horas: 3,
    canchas: 2,
    liga: 2,
    compartida: true,
  });

  const postLog = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/logs", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify(log),
      });
    } catch (error) {}
  };

  const cambiarFecha = (newValue) => {
    setLog({ ...log, fecha: newValue });
  };

  const cambiarFotografo = (event, newValue) => {
    setLog({ ...log, fotografo: newValue });
    console.log(log.fotografo);
  };

  const cambiarLiga = (event, newValue) => {
    setLog({ ...log, liga: newValue });
    console.log(log);
  };

  const cambiarCanchas = (event, newValue) => {
    setLog({ ...log, canchas: newValue });
    console.log(log.canchas);
  };
  const cambiarHoras = (event, newValue) => {
    setLog({ ...log, horas: newValue });
  };

  return (
    <form onSubmit={postLog} className="h-3/4 flex-none basis-3/4">
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
      <Select
        color="primary"
        placeholder="Choose one…"
        variant="solid"
        onChange={cambiarFotografo}
      >
        {photos.photographers.map((photo) => (
          <Option key={photo._id} value={photo._id}>
            {photo.nombre + " " + photo.apellido}
          </Option>
        ))}
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
        {ligas.leagues.map((liga) => (
          <Option key={liga._id} value={liga._id}>
            {liga.name}
          </Option>
        ))}
      </Select>
      <Typography level="h2" fontSize="xl" className="my-2">
        Numero de canchas
      </Typography>
      <Select
        color="primary"
        placeholder="Choose one…"
        variant="solid"
        onChange={cambiarCanchas}
      >
        <Option value={1}>1 cancha</Option>
        <Option value={2}>2 canchas</Option>
        <Option value={3}>3 canchas</Option>
      </Select>
      <Typography level="h2" fontSize="xl" className="my-2">
        Horas
      </Typography>
      <Select
        color="primary"
        placeholder="Choose one…"
        variant="solid"
        onChange={cambiarHoras}
      >
        <Option value={1}>1 hora</Option>
        <Option value={2}>2 horas</Option>
        <Option value={3}>3 horas</Option>
      </Select>
      <Typography level="h2" fontSize="xl" className="my-2">
        Compartidas
      </Typography>
      <div className="my-1.5">
        <Switch
          checked={log.compartida}
          onChange={(event) =>
            setLog({ ...log, compartida: event.target.checked })
          }
        />
      </div>

      <Button
        type="submit"
        className="bg-blue-600 my-3"
        size="md"
        variant="solid"
        color="primary"
      >
        Enviar
      </Button>
    </form>
  );
}
