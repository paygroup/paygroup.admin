import { createCookieSessionStorage } from "@remix-run/node";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_nhost",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 604_800 * 1000),
    // maxAge: 60 * 60 * 24 * 7, // 7 days
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
