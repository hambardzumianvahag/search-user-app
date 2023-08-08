import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import Table from "./Table";

export default function Layout() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="Layout">
      <Header />
      <Input value={value} setValue={setValue} />
      <Button value={value} result={result} setResult={setResult} />
      <Table result={result} />
    </div>
  );
}
