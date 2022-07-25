import scss from '@/components/projectScroller/projectCard/projectCard.module.scss';
import Image from 'next/image';

interface Props {
  name: string;
  desc: string;
}

const ProjectCard = ({ name, desc }: Props): JSX.Element => {
  return (
    <div className={scss.wrapper}>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <h3>{desc}</h3>
      </div>
      <div>
        <Image src="/reshare/screens.png" layout='responsive' width={5} height={5} />
      </div>
    </div>
  )
}

export default ProjectCard;