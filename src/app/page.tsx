import HeaderComponent from "@/components/header/header";
import ListComponent from "@/components/list/list";

import projects from "../../public/projects.json";
import works from "../../public/works.json";
import networks from "../../public/networks.json";

export default function HomePage() {
  return (
    <>
      <HeaderComponent networks={networks} />
      <ListComponent title="Works" data={works} />
      <ListComponent title="Projects" data={projects} />
    </>
  );
}
