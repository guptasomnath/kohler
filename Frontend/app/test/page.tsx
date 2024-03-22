import { revalidatePath } from "next/cache";
import React from "react";

interface DataTypes {
  response: string[];
}

async function page() {
  async function onChange(data: FormData) {
    "use server";

    //store data
    const rendomNum = Math.random() * 1000;
    const datas = await fetch(
      "http://localhost:8080/store?data=Data-" + data.get("basin")?.toString()
    );
    const result = (await datas.json()) as DataTypes;
    revalidatePath("./test");
  }

  const datas = await fetch(
    "http://localhost:8080/datas"
  );
  const result = (await datas.json()) as DataTypes;

  return (
    <div>
      <form action={onChange}>
        <input type="checkbox" name="basin" defaultChecked />
        <button type="submit">Store Data</button>
      </form>

      {result.response.map((item) => (
        <label>{item}</label>
      ))}
    </div>
  );
}

export default page;
