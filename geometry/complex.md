# Complex Geometry

## Vector Bundles

### Properties

::: proposition Proposition
Associating to a holomorphic vector bundle its sheaf of sections defines a canonical bijection between the set of holomorphic vector bundles of rank $r$ and the set of locally free $\mc{O}_{X}$-modules of rank $r$.
:::

## Constructions of Vector Bundles

### Pullback Bundles

Let $p : \mc{L} \rightarrow Y$ be a vector bundle with fibre $F$, and let $f : X \rightarrow Y$ be a continous map. The _pullback bundle_ is defined to be
$$
f^{\ast}\mc{L} := \{ (x,l) \in (X,\mc{L}) : f(x) = p(l) \} \subseteq X \times \mc{L},
$$
which is equipped with the subspace topology and the projection map $\pi : f^{\ast}\mc{L} \rightarrow X$, given by projecting onto the first factor.

::: tip Example
Let $L \rightarrow X$ be a vector bundle over a topological space $X$, and consider a point $x \in X$. The inclusion map $i: \{x\} ↪ X$ gives rise to the induced bundle $i^{\ast}L \rightarrow \{x\}$, which is the same as the trivial bundle $\{x\} \times L_{x}$, where $L_{x} \cong i^{\ast}L$ is the fibre over the point $x$.

More generally, if $i: Y \hookrightarrow X$ is the inclusion map of some subspace $Y$ into $X$, then $L|_{Y} := i^{\ast}L$ is the _restriction_ of $L$ from $X$ to $Y$.
:::

::: tip Example
Let $\mc{O}(1) \rightarrow \PP^{n}$ be a line bundle over $n$-dimensional projective space $\PP^{n}$, where the homogeneous coordinates $x_{0},\ldots, x_{n}$ give rise to global sections $x_{0},\ldots, x_{n} \in H^{0}(\PP^{n}, \mc{O}(1))$. Now let $X$ be an algebraic variety, and let $\varphi : X \rightarrow \PP^{n}$ be a projective embedding. Then $\mc{L} = \varphi^{\ast}\mc{O}(1)$ is a line bundle on $X$, and the global sections $s_{0},\ldots, s_{n}$, where $s_{i} = \varphi^{\ast}x_{i}$, $s_{i} \in H^{0}(X,\mc{L})$, generate the line bundle $\mc{L}$.
:::

### Direct Sum of Bundles

Let $\mc{L}$ and $\mc{M}$ be two vector bundles over $X$. The _direct sum_ $\mc{L} \oplus \mc{M}$ is the vector bundle over $X$ whose fibre $(\mc{L} \oplus \mc{M})_{x}$ for any $x \in X$ is canonically isomorphic to $\mc{L}_{x} \oplus \mc{M}_{x}$ as vector spaces.

### Tensor Product of Bundles

Let $\mc{L}$ and $\mc{M}$ be two vector bundles over $X$. The _tensor product_ $\mc{L} \otimes \mc{M}$ is the vector bundle over $X$ whose fibre $(\mc{L} \otimes \mc{M})_{x}$ for any $x \in X$ is canonically isomorphic to $\mc{L}_{x} \otimes \mc{M}_{x}$ as vector spaces.

### Exterior and Symmetric Powers of Bundles

Let $\mc{L}$ be a vector bundle over $X$. The _$i$-th exterior power_ $⋀^{i}\mc{L}$ and the _$i$-th symmetric power_ $S^{i}\mc{L}$ are the vector bundles over $X$ whose fibres for any $x \in X$ are canonically isomorphic to $⋀^{i}\mc{L}_{x}$ and $S^{i}\mc{L}_{x}$, respectively.

### External Tensor Products of Bundles

For two vector bundles $p_{1}: \mc{L} \rightarrow X$ and $p_{2}: \mc{M} \rightarrow Y$, their _external tensor product_, denoted by 
$$\mc{L} \boxtimes \mc{M} \rightarrow X \times Y,$$
is the tensor product of vector bundles of the pullback bundles $p_{1}^{\ast}\mc{L} \otimes_{X} p_{2}^{\ast}\mc{M} \rightarrow X \times Y$ over the product space $X \times Y$.

### Dual Bundles

Let $\mc{L}$ be a vector bundle over $X$. The _dual bundle_ $\mc{L}^{\ast}$ is the vector bundle over $X$ whose fibre $(\mc{L}^{\ast})_{x}$ over $x \in X$ is canonically isomorphic with the dual vector space $(\mc{L}_{x})^{\ast}$.

### Determinant Bundles

Let $\mc{L}$ be a vector bundle over $X$ of rank $r$. The _determinant bundle_ of $\mc{L}$ is the line bundle $\det(\mc{L}) := ⋀^{r}\mc{L}$.

### Projective Bundles

Let $\mc{L}$ be a vector bundle over $X$, and let $s : X \rightarrow \mc{L}$ be the zero section of $\mc{L}$, that is any point $x \in X$ is mapped to $0 \in \mc{L}_{x}$ by $s$. The _projective bundle associated to $\mc{L}$_, or the _projectivisation of $\mc{L}$_, is defined as
$$
\PP(\mc{L}) := (\mc{L} - s(X))/\mathbb{C}^{\ast},
$$
and it comes with a projective $\pi: \PP(\mc{L}) \rightarrow X$ whose fibre over $x \in X$ is isomorphic to the projectivised vector space $\PP(\mc{L}_{x})$.