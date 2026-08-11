import { Badge } from '#components/base-ui/badge';

const Badge15 = () => {
  return (
    <Badge className="border-1 border-blue-700 bg-mist-900 text-white leading-5">
      <span
        className="size-2 rounded-full bg-green-600 dark:bg-green-400 animate-pulse"
        aria-hidden="true"
      />
      Available for new projects
    </Badge>
  );
};

export default Badge15;