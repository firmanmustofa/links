// plugin
gsap.registerPlugin(TextPlugin);
// animate
gsap.from(".container", { duration: 0.75, y: '100%', opacity: 0, });
gsap.from(".profile img", { duration: 0.75, y: '-100%', opacity: 0, ease: 'bounce', delay: 1, });
gsap.to(".profile .text-profile h3", { duration: 1, delay: 1.5, text: 'Yakub Firman Mustofa' });
gsap.to(".profile .text-profile p", { duration: 1, delay: 2.5, text: '@f.firman5' });

gsap.from("span", { duration: 0.75, y: '-100%', opacity: 0, ease: 'bounce', delay: 3, });

gsap.from(".i1", { duration: 0.75, opacity: 0, delay: 4 });
gsap.from(".i2", { duration: 0.75, opacity: 0, delay: 4.5 });
gsap.from(".i3", { duration: 0.75, opacity: 0, delay: 5 });
gsap.from(".i4", { duration: 0.75, opacity: 0, delay: 5.5 });

gsap.from(".link .message-link .a1", { duration: 0.75, x: '-100%', opacity: 0, ease: 'bounce', delay: 6, });
gsap.from(".link .message-link .a2", { duration: 0.75, x: '100%', opacity: 0, ease: 'bounce', delay: 6, });
gsap.from(".footer", { duration: 0.75, y: '100%', opacity: 0, ease: 'bounce', delay: 6.5, });






