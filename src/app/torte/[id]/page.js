import { useRouter } from "next/router";

export default function Cake() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Cake {id}</h1>;
}
