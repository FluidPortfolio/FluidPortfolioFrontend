import { useRouter } from "../../node_modules/next/router";

export default function Portfolio() {
    const router = useRouter();

    return (
        <h1>{router?.query?.name}</h1>
    )
}