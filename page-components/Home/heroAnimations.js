const animationVariables = {
  duration: 1,
  stagger: 0.3,
};

export const animationVariants = {
  hide: {
    transition: {
      staggerChildren: animationVariables.stagger,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: animationVariables.stagger,
      staggerDirection: 1,
    },
  },
};

export const itemAnimations = {
  hide: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: animationVariables.duration,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animationVariables.duration,
    },
  },
};
