import Link from "next/link";

const Copyright = () => {
  return (
    <div className="pb-6 text-center text-sm text-dark-copytight-text opacity-70">
      <p>© Nilesh Kamble 2026</p>
      <Link
        href="/privacy"
        className="mt-1 inline-block underline underline-offset-4 hover:opacity-100"
      >
        Privacy Policy
      </Link>
    </div>
  );
};

export default Copyright;
