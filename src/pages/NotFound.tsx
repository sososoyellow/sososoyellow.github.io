import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-8 bg-background">
      <p className="font-heading text-[6rem] font-extrabold text-outline-variant leading-none">404</p>
      <h1 className="font-heading text-headline-lg text-text-primary">迷路了</h1>
      <p className="font-body text-body-md text-text-body max-w-xs leading-relaxed opacity-70">
        这个页面不存在，或者已经被猫咪踩走了。
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2.5 rounded-full border border-on-tertiary-container font-body text-label-md text-on-tertiary-container hover:bg-on-tertiary-container hover:text-white transition-all"
      >
        ← 回到首页
      </Link>
    </main>
  );
};

export default NotFound;
