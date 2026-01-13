# 📝 COMO EDITAR A LOGO E CORES

## 🖼️ Editar a Logo

Abra o arquivo **`constants.ts`** e procure por:

```typescript
export const LOGO_URL = "https://iili.io/fvpUFQs.md.png";
```

Substitua o link pela sua logo preferida:

```typescript
// Exemplo com outra URL
export const LOGO_URL = "https://sua-imagem.com/logo.png";
```

**A logo irá aparecer em:**
- ✅ Topo da landing page (centralizada)
- ✅ Rodapé (centralizada)

---

## 🎨 Editar a Cor de "PATCH"

A cor "PATCH" usa a classe Tailwind `text-cyan-500` (azul bege/ciano).

### Locais onde aparecem as cores:

**1. Topo da landing page** (`App.tsx`):
```tsx
<span className="text-cyan-500"> PATCH</span>
```

**2. Rodapé** (`components/Footer.tsx`):
```tsx
<span className="text-cyan-500 ml-1">PATCH</span>
```

### Cores Tailwind disponíveis para alterar:

| Cor | Classe |
|---|---|
| Azul claro (ATUAL) | `text-cyan-500` |
| Azul mais escuro | `text-blue-600` |
| Verde | `text-green-500` |
| Roxo | `text-purple-500` |
| Rosa | `text-pink-500` |

**Exemplo:** Para mudar para azul mais escuro:
```tsx
<span className="text-blue-600"> PATCH</span>
```

---

## 🔄 Resumo de Edições

| O que quer editar | Arquivo | Onde encontrar |
|---|---|---|
| Logo (imagem) | `constants.ts` | `export const LOGO_URL = "...";` |
| Cor de "PATCH" (topo) | `App.tsx` | `<span className="text-cyan-500">` |
| Cor de "PATCH" (rodapé) | `components/Footer.tsx` | `<span className="text-cyan-500">` |

---

## ✅ Checklist

- [x] Logo editável via `constants.ts`
- [x] Cor "PATCH" em azul bege (cyan-500)
- [x] Logo aparece no topo centralizado
- [x] Logo aparece no rodapé centralizado
- [x] Logo com efeito hover no rodapé
- [x] Tudo facilmente editável
