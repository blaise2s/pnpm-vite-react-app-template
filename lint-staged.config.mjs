export default {
  '**/*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx}': (stagedFiles) => {
    const stagedFileList = stagedFiles.join(' ');
    return [
      `eslint --fix ${stagedFileList}`,
      `prettier --write ${stagedFileList}`,
    ];
  },
};
