import { Button, Htag, Ptag, Tag } from "../components";

export default function Home() {
  return <div>
    <Htag tag="h1">Приветики!</Htag>
    <Ptag size="l">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eligendi impedit maxime sed, tempora omnis, harum velit praesentium dolores cupiditate necessitatibus quisquam. Eos, expedita itaque tempore id repellendus excepturi perspiciatis.</Ptag>
    <Button appearance='primary'>123</Button>
    <Button appearance='ghost' arrow="right">1233333333333333333333333333333</Button>
    <Tag color="green">Тыкалка</Tag>
    <Tag color="red">Тыкалка</Tag>
    <Tag color="primary">Тыкалка</Tag>
    <Tag color="gray">Тыкалка</Tag>
    <Tag color="ghost">Тыкалка</Tag>
  </div>
}
