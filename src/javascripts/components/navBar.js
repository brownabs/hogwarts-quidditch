const loadNavBar = () => {
  const domString = $('#nav-container').html(`
  <nav>
    <a href="#" class="brand">Hogwarts</a>
    <ul>
      <li><a href="#">Home</a></li>
    </ul>
  </nav>
`);

  return domString;
};

export default { loadNavBar };
