"use server"

export async function sendMail(
  user_name: string | undefined,
  user_email: string | undefined,
  user_number: string | undefined,
  user_message: string | undefined
) {
  const script = process.env.GMAIL_SCRIPT;

  const url =
    script +
    `?toEmail=subrata.ash@gmail.com&subject=User want to contact&body=<h4>Name : ${user_name}</h4><h4>Email : ${user_email}</h4><h4>Number : ${user_number}</h4><h4>Message : ${user_message}</h4>`;

  const response = await fetch(url, { next: { revalidate: 360 } });
  const result = await response.text();

  return "Success";
}
