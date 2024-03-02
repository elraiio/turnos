function Principal({ children }) {
  return (
    <>
      <sidenav>
        <a href="/lista"></a>
        <a href="/crear"></a>
      </sidenav>
      <main>
        {children}
      </main>
    </>
  );
}

export default Principal;