// Configurações fáceis de editar
const WHATSAPP_RENAS = '5512996539177';
// Troque SEU-USUARIO pelo endereço correto do seu perfil no LinkedIn.
const LINKEDIN_DESENVOLVEDORA = 'https://www.linkedin.com/in/evelyn-vareiro';
const PRATOS = {
  "1": {
    "nome": "Medalhão de Filé Mignon ao Molho de Vinho Tinto",
    "categoria": "Carnes",
    "imagem": "assets/pratos/prato-1-detalhe.webp",
    "descricao": "Um clássico executado com precisão. O filé mignon é selado no ponto, macio por dentro e dourado por fora, e recebe um molho de vinho tinto de redução lenta. O risoto de parmesão equilibra a intensidade do molho com cremosidade e elegância.",
    "ingredientes": "Filé mignon, vinho tinto, caldo de carne, manteiga, ervas, arroz arbóreo e parmesão.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 139,00 de quinta a sábado • R$ 278,00 aos domingos"
  },
  "2": {
    "nome": "Filé Mignon à Parmegiana com Molho Artesanal de Tomates",
    "categoria": "Carnes",
    "imagem": "assets/pratos/prato-2-detalhe.webp",
    "descricao": "A parmegiana que virou memória afetiva, feita do jeito certo. Filé mignon empanado na medida, coberto por molho de tomate artesanal preparado lentamente e finalizado com queijo gratinado. Acompanha arroz branco e batatas fritas.",
    "ingredientes": "Filé mignon, farinha de trigo, ovos, farinha de rosca, molho artesanal de tomates, muçarela, arroz e batatas.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 122,00 de quinta a sábado • R$ 244,00 aos domingos"
  },
  "3": {
    "nome": "Salmão Grelhado ao Molho Belle Meunière",
    "categoria": "Peixes",
    "imagem": "assets/pratos/prato-3-detalhe.webp",
    "descricao": "O salmão chega grelhado com precisão, exterior dourado e interior suculento. O molho Belle Meunière combina cebola, alcaparras, champignon e camarão. O risoto de limão-siciliano acrescenta frescor e uma acidez delicada.",
    "ingredientes": "Salmão, cebola, alcaparras, champignon, camarão, limão-siciliano, arroz arbóreo, manteiga e parmesão.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 115,00 de quinta a sábado • R$ 230,00 aos domingos"
  },
  "4": {
    "nome": "Filé de Truta Grelhada com Amêndoas",
    "categoria": "Peixes",
    "imagem": "assets/pratos/prato-4-detalhe.webp",
    "descricao": "Delicada, nutritiva e cheia de sabor. A truta é grelhada com cuidado e finalizada com amêndoas laminadas tostadas. Brócolis, batata sauté e arroz branco completam um prato leve e muito bem equilibrado.",
    "ingredientes": "Filé de truta, amêndoas laminadas, manteiga, brócolis, batatas, ervas e arroz branco.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 105,00 de quinta a sábado • R$ 210,00 aos domingos"
  },
  "5": {
    "nome": "Camarão Cremoso ao Catupiry",
    "categoria": "Frutos do Mar",
    "imagem": "assets/pratos/prato-5-detalhe.webp",
    "descricao": "Um dos favoritos da casa. Camarões frescos em molho cremoso com catupiry, gratinados ao forno até dourar. A batata palha caseira traz a crocância que completa esse prato generoso e reconfortante.",
    "ingredientes": "Camarões, catupiry, creme de leite, queijo, manteiga, temperos frescos e batata palha caseira.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 121,00 de quinta a sábado • R$ 242,00 aos domingos"
  },
  "6": {
    "nome": "Risoto de Parmesão com Tiras de Filé Mignon",
    "categoria": "Risotos",
    "imagem": "assets/pratos/prato-6-detalhe.webp",
    "descricao": "O clássico que nunca decepciona. Risoto cremoso de parmesão, preparado com técnica e paciência, recebe tiras macias de filé mignon no momento certo. Uma proposta direta, elegante e impecável na execução.",
    "ingredientes": "Arroz arbóreo, parmesão, filé mignon, caldo, vinho branco, manteiga, cebola e ervas.",
    "porcao": "Serve 1 pessoa de quinta a sábado e 2 pessoas aos domingos.",
    "preco": "R$ 94,00 de quinta a sábado • R$ 188,00 aos domingos"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeColor = document.getElementById('theme-color');
  const themeButtons = document.querySelectorAll('[data-theme-toggle]');
  const updateThemeControls = theme => {
    const dark = theme === 'dark';
    const action = dark ? 'Ativar modo claro' : 'Ativar modo escuro';
    themeButtons.forEach(button => {
      button.setAttribute('aria-label', action);
      button.setAttribute('title', action);
      const label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = action;
    });
    if (themeColor) themeColor.content = dark ? '#1c1a18' : '#faf5ec';
  };
  const setTheme = (theme, save = true) => {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    updateThemeControls(nextTheme);
    if (save) {
      try { localStorage.setItem('renas-theme', nextTheme); } catch {}
    }
  };
  setTheme(root.dataset.theme, false);
  themeButtons.forEach(button => button.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  }));
  document.querySelectorAll('[data-linkedin]').forEach(link => link.href = LINKEDIN_DESENVOLVEDORA);

  const menuButton = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = () => { mobileMenu?.classList.add('hidden'); menuButton?.setAttribute('aria-expanded','false'); };
  menuButton?.addEventListener('click', () => {
    const open = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', !open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

  const navbar = document.getElementById('navbar');
  const updateNavbar = () => navbar?.classList.toggle('bg-charcoal/95', window.scrollY > 30);
  window.addEventListener('scroll', updateNavbar, {passive:true}); updateNavbar();

  const modal = document.getElementById('dish-modal');
  const closeButton = document.getElementById('dish-modal-close');
  const fields = {
    image: document.getElementById('dish-modal-image'), category: document.getElementById('dish-modal-category'),
    title: document.getElementById('dish-modal-title'), description: document.getElementById('dish-modal-description'),
    ingredients: document.getElementById('dish-modal-ingredients'), portion: document.getElementById('dish-modal-portion'),
    price: document.getElementById('dish-modal-price'), whatsapp: document.getElementById('dish-modal-whatsapp')
  };
  let lastFocus = null;
  let pageScrollY = 0;
  const lockPageScroll = () => {
    pageScrollY = window.scrollY;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${pageScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  };
  const unlockPageScroll = () => {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, pageScrollY);
  };
  const openModal = id => {
    const dish = PRATOS[id]; if (!dish || !modal) return;
    lastFocus = document.activeElement;
    fields.image.src=dish.imagem; fields.image.alt=dish.nome; fields.category.textContent=dish.categoria;
    fields.title.textContent=dish.nome; fields.description.textContent=dish.descricao; fields.ingredients.textContent=dish.ingredientes;
    fields.portion.textContent=dish.porcao; fields.price.textContent=dish.preco;
    fields.whatsapp.href=`https://wa.me/${WHATSAPP_RENAS}?text=${encodeURIComponent(`Olá, Rena's! Gostaria de saber mais sobre o prato: ${dish.nome}.`)}`;
    lockPageScroll();
    modal.scrollTop = 0;
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); closeButton?.focus({preventScroll:true});
  };
  const closeModal = () => {
    if (!modal?.classList.contains('is-open')) return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true');
    unlockPageScroll(); fields.image.src=''; lastFocus?.focus?.({preventScroll:true});
  };
  document.querySelectorAll('.dish-open').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.dish)));
  closeButton?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMobileMenu(); } });

  const phone = document.getElementById('telefone');
  phone?.addEventListener('input', e => {
    let v=e.target.value.replace(/\D/g,'').slice(0,11);
    if(v.length>10) v=v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
    else if(v.length>6) v=v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
    else if(v.length>2) v=v.replace(/(\d{2})(\d*)/,'($1) $2');
    else if(v.length) v='('+v; e.target.value=v;
  });

  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if(!form.checkValidity()) { form.reportValidity(); status.textContent='Preencha os campos obrigatórios para continuar.'; status.classList.add('is-visible'); return; }
    const data=Object.fromEntries(new FormData(form));
    const message=[`Olá, Rena's Bar e Restaurante!`,'',`Nome: ${data.nome}`,`Telefone: ${data.telefone}`,`Assunto: ${data.assunto}`,'',`Mensagem:`,data.mensagem].join('\n');
    status.textContent='Abrindo o WhatsApp com sua mensagem...'; status.classList.add('is-visible');
    const url=`https://wa.me/${WHATSAPP_RENAS}?text=${encodeURIComponent(message)}`;
    const opened=window.open(url,'_blank','noopener,noreferrer'); if(!opened) window.location.href=url;
  });
});
