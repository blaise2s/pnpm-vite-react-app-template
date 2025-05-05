import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <div>TODO: Build a new, awesome web app!</div>
      <div>pnpm vite react typescript web application template</div>
    </>
  );
}
