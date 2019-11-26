# Geometric Invariant Theory

- See also [algebraic geometry](./algebraic.md).

## Linearisations

### $G$-linearisation

A _$G$-linearisation_ on a line bundle $L$ is an action $\overline{\sigma}: G \times L \rightarrow L$ such that

- the diagram (INSERT) commutes;


- the zero section of $L$ is $G$-stable. 
  
### Picard Groups of Products

Consider two varieties $X, Y$, and their projections $p_{1}: X \times Y \rightarrow X$, $p_{2} : X \times Y \rightarrow Y$. From this we get a map
$$
p_{1}^{\ast} \times p_{2}^{\ast} : Pic(X) \times Pic(Y) ⟶ Pic(X \times Y),\\ 
(L,M) ⟼ p_{1}^{\ast}(L) \otimes p_{2}^{\ast}(M).
$$
This map $p_{1}^{\ast} \times p_{2}^{\ast}$ is an isomorphism when $X$ and $Y$ are both normal irreducible varieties, and when _one_ of them is _rational_, that is, one contains a non-empty open subset isomorphic to an open subset of some affine space $\mathbb{A}^{n}$.

## Algebraic Symplectic Reduction

- See also [symplectic geometry](../symplectic).

### Algebraic Symplectic Reduction

Let $G$ be a reductive group acting linearly on a vector space $V$, and algebraically symplectically on $(T^{\ast}V, \omega)$ with algebraic moment map $\mu :T^{\ast}V \rightarrow \mathfrak{g}^{\ast}$. Let $\chi$ be a character of $G$ and $\xi \in \mathfrak{g}^{\ast}$ be a central element. Call the pair $(\chi, \xi)$ a _central pair_. The _algebraic symplectic reduction_ of the $G$-action on $(T^{\ast}V,\omega)$ at the central pair $(\chi.\xi)$ is the GIT quotient of the linear $G$-action on the affine algebraic variety $\mu^{-1}(\xi)$, with respect to the character defined by $\chi$, which is denoted as follows:
$$
\pi = \pi_{(\chi,\xi)}: \mu^{-1}(\xi)^{\chi-ss} ⟶ \mu^{-1}(\xi)//_{\chi}\ G.
$$