export const Footer = () => {
  return (
    <footer className="mt-32 py-10 text-center text-gray-400 border-t border-white/10">
      <p className="text-sm">
        © {new Date().getFullYear()} ArtifactRestoreAI. All rights reserved.
      </p>
      <p className="text-[10px] mt-1 opacity-60">
        Developed for Museum Artifact Patch Restoration Research
      </p>
    </footer>
  );
};
