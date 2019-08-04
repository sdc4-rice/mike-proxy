import http from "k6/http";
import { check } from "k6";

export const options = {
  rps: 1000,
  duration: "60s"
};

export default function () {
  let res = http.get("http://localhost:3000/");
  check(res, {
    "status was 200": (r) => r.status == 200
  });
}
