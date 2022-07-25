import { useRef, useState } from 'react';
import scss from '@/components/projectScroller/projectScroller.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  motion, 
  Variants,
  useScroll,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue,
  AnimationControls
} from 'framer-motion';

import ProjectCard from './projectCard/projectCard';

interface Props {
  name: string;
}

const projectVariants: Variants = {
  rest: {
    opacity: 0
  },
  hover: {
    opacity: 1
  }
}

const projects: string[] = [
  "Cinemagic",
  "Reshare",
  "Clean Table"
]

export default function ProjectScroller(): JSX.Element {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  // const imgAnimation: AnimationControls = useAnimation();
  
  function Project({ name }: Props): JSX.Element {
    const router = useRouter();
    const [isHovered, setHovered] = useState<boolean>(false);
    const linkName: string = name.toLowerCase();

    return (
      <>
      {/* <motion.ul
        className={scss.projectNameWrapper}
        viewport={{
          root: scrollWrapperRef
        }}
      > */}
        {/* <Link href={`/works/${encodeURI(linkName)}`}> */}
          <motion.li 
            initial="rest"
            whileHover="hover"
            // onMouseMove={e => AppImage(e)}
            onClick={() => router.push(`/works/${linkName}`)}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            {name}
          </motion.li>
        {/* </Link> */}
        { isHovered ? (
          <motion.img 
            src='/reshare/screens.png'
            // animate={imgAnimation}
            // variants={projectVariants} 
            style={{
              opacity: 1
            }}
          />
        ) : (
          <motion.img 
            src='/reshare/screens.png'
            style={{
              opacity: 0,
              // transitionProperty: opacity,
              // transitionDuration: 1
            }}
          />
        ) 
        }
      {/* </motion.ul> */}
      </>
    )
  }

  // function AppImage(mouse: any) {
  //   // const linkName: string = name.toLowerCase();
  //   const { clientX, clientY } = mouse;
  //   const moveX: number = clientX - window.innerWidth / 2;
  //   const moveY: number = clientY - window.innerHeight / 2;
  //   const offsetFactor: number = 15;
  
  //   imgAnimation.start({
  //     x: moveX / offsetFactor,
  //     y: moveY / offsetFactor
  //   })
  // }

  return (
    <div 
      className={scss.scrollWrapper}
      ref={scrollWrapperRef}
    >
      {projects.map((name) => (
        <Project name={name} key={name} />
      ))}

      {/* <ProjectCard name='Name' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam quam ipsum illum consectetur expedita quisquam enim obcaecati nihil animi eligendi velit, facere iure at unde ratione molestiae ullam consequuntur?' /> */}
    </div>
  )
}




// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }: { id: number }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section>
//       <div ref={ref}>
//         <img src={`/${id}.jpg`} alt="A London skyscraper" />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </section>
//   );
// }

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <>
//       {[1, 2, 3, 4, 5].map((image) => (
//         <Image id={image} />
//       ))}
//       <motion.div className="progress" style={{ scaleX }} />
//     </>
//   );
// }