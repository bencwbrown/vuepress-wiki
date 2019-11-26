---
lang: en-GB
---

# Sheaves

$\gdef\mc#1{\mathcal{#1}}$
$\gdef\mf#1{\mathfrak{#1}}$

## Invertible Sheaves or Line Bundles

### The Tautological and Hyperplane Bundles

Consider the line bundle
$$
    \mc{O}_{\PP^{n}}(1) := \big( \CC^{n+1} - \{0\} \big) \times_{\CC^{\ast}} \CC = \bigg( \big( \CC^{n+1} - \{0\} \big) \times \CC \bigg) / \CC^{\ast},
$$
where $\CC^{\ast}$ acts via inverse scalar multiplication on both $\CC^{n+1}$ and $\CC$, i.e. if $\CC^{n+1} = \Spec(\CC[x_{0},\ldots, x_{n}])$ and $\CC = \Spec(\CC[y])$, then each variable has weight one with respect to the $\CC^{\ast}$-action.

$\mc{O}_{\PP^{n}}(1)$ is a space that maps to $\PP^{n}$ by projecting onto the first factor, and the fibre of this projection over any point is a line. More generally, we can consider the line bundle
$$
    \mc{O}_{\PP^{n}}(d) := \big( \CC^{n+1} - \{0\} \big) \times_{\CC^{\ast}} \CC_{d} = \bigg( \big( \CC^{n+1} - \{0\} \big) \times \CC_{d} \bigg) / \CC^{\ast},
$$
where now $\CC^{\ast}$ acts on $\CC_{d} = \Spec(\CC[y])$ with weight $d$, i.e. $t \cdot y = t^{d}y$ for any $t \in \CC^{\ast}$ and with $d \in \ZZ$.

::: proposition Tautological and Hyperplane Bundles
The set $\mc{O}_{\PP^{n}}(-1) \subset \PP^{n} \times \CC^{n+1}$ that consists of all pairs $(l,z) \in \PP^{n} \times \CC^{n+1}$ with $z \in l$ forms in a natural way a holomorphic line bundle $\mc{O}_{\PP^{n}}(-1)$ over $\PP^{n}$, called the _tautological bundle_. 

Its dual bundle $\mc{O}_{\PP^{n}}(1) := \mc{O}_{\PP^{n}}(-1)^{\ast}$ is called the _hyperplane_ or _anti-tautological bundle_.
:::




















