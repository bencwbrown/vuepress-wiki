# Complex Geometry

## Vector Bundles

### Properties

::: theorem Proposition
Associating to a holomorphic vector bundle its sheaf of sections defines a canonical bijection between the set of holomorphic vector bundles of rank $r$ and the set of locally free $\mathcal{O}_{X}$-modules of rank $r$.
:::

## Constructions of Vector Bundles

### Pullback Bundles

Let $p : \mathcal{L} \rightarrow Y$ be a vector bundle with fibre $F$, and let $f : X \rightarrow Y$ be a continous map. The _pullback bundle_ is defined to be
$$
f^{\ast}\mathcal{L} := \{ (x,l) \in (X,\mathcal{L}) : f(x) = p(l) \} \subseteq X \times \mathcal{L},
$$
which is equipped with the subspace topology and the projection map $\pi : f^{\ast}\mathcal{L} \rightarrow X$, given by projecting onto the first factor.

::: tip Example
Let $L \rightarrow X$ be a vector bundle over a topological space $X$, and consider a point $x \in X$. The inclusion map $i: \{x\} ↪ X$ gives rise to the induced bundle $i^{\ast}L \rightarrow \{x\}$, which is the same as the trivial bundle $\{x\} \times L_{x}$, where $L_{x} \cong i^{\ast}L$ is the fibre over the point $x$.

More generally, if $i: Y \hookrightarrow X$ is the inclusion map of some subspace $Y$ into $X$, then $L|_{Y} := i^{\ast}L$ is the _restriction_ of $L$ from $X$ to $Y$.
:::

::: tip Example
Let $\mathcal{O}(1) \rightarrow \mathbb{P}^{n}$ be a line bundle over $n$-dimensional projective space $\mathbb{P}^{n}$, where the homogeneous coordinates $x_{0},\ldots, x_{n}$ give rise to global sections $x_{0},\ldots, x_{n} \in H^{0}(\mathbb{P}^{n}, \mathcal{O}(1))$. Now let $X$ be an algebraic variety, and let $\varphi : X \rightarrow \mathbb{P}^{n}$ be a projective embedding. Then $\mathcal{L} = \varphi^{\ast}\mathcal{O}(1)$ is a line bundle on $X$, and the global sections $s_{0},\ldots, s_{n}$, where $s_{i} = \varphi^{\ast}x_{i}$, $s_{i} \in H^{0}(X,\mathcal{L})$, generate the line bundle $\mathcal{L}$.
:::

### Direct Sum of Bundles

Let $\mathcal{L}$ and $\mathcal{M}$ be two vector bundles over $X$. The _direct sum_ $\mathcal{L} \oplus \mathcal{M}$ is the vector bundle over $X$ whose fibre $(\mathcal{L} \oplus \mathcal{M})_{x}$ for any $x \in X$ is canonically isomorphic to $\mathcal{L}_{x} \oplus \mathcal{M}_{x}$ as vector spaces.

### Tensor Product of Bundles

Let $\mathcal{L}$ and $\mathcal{M}$ be two vector bundles over $X$. The _tensor product_ $\mathcal{L} \otimes \mathcal{M}$ is the vector bundle over $X$ whose fibre $(\mathcal{L} \otimes \mathcal{M})_{x}$ for any $x \in X$ is canonically isomorphic to $\mathcal{L}_{x} \otimes \mathcal{M}_{x}$ as vector spaces.

### Exterior and Symmetric Powers of Bundles

Let $\mathcal{L}$ be a vector bundle over $X$. The _$i$-th exterior power_ $⋀^{i}\mathcal{L}$ and the _$i$-th symmetric power_ $S^{i}\mathcal{L}$ are the vector bundles over $X$ whose fibres for any $x \in X$ are canonically isomorphic to $⋀^{i}\mathcal{L}_{x}$ and $S^{i}\mathcal{L}_{x}$, respectively.

### External Tensor Products of Bundles

For two vector bundles $p_{1}: \mathcal{L} \rightarrow X$ and $p_{2}: \mathcal{M} \rightarrow Y$, their _external tensor product_, denoted by 
$$\mathcal{L} \boxtimes \mathcal{M} \rightarrow X \times Y,$$
is the tensor product of vector bundles of the pullback bundles $p_{1}^{\ast}\mathcal{L} \otimes_{X} p_{2}^{\ast}\mathcal{M} \rightarrow X \times Y$ over the product space $X \times Y$.

### Dual Bundles

Let $\mathcal{L}$ be a vector bundle over $X$. The _dual bundle_ $\mathcal{L}^{\ast}$ is the vector bundle over $X$ whose fibre $(\mathcal{L}^{\ast})_{x}$ over $x \in X$ is canonically isomorphic with the dual vector space $(\mathcal{L}_{x})^{\ast}$.

### Determinant Bundles

Let $\mathcal{L}$ be a vector bundle over $X$ of rank $r$. The _determinant bundle_ of $\mathcal{L}$ is the line bundle $\det(\mathcal{L}) := ⋀^{r}\mathcal{L}$.

### Projective Bundles

Let $\mathcal{L}$ be a vector bundle over $X$, and let $s : X \rightarrow \mathcal{L}$ be the zero section of $\mathcal{L}$, that is any point $x \in X$ is mapped to $0 \in \mathcal{L}_{x}$ by $s$. The _projective bundle associated to $\mathcal{L}$_, or the _projectivisation of $\mathcal{L}$_, is defined as
$$
\mathbb{P}(\mathcal{L}) := (\mathcal{L} - s(X))/\mathbb{C}^{\ast},
$$
and it comes with a projective $\pi: \mathbb{P}(\mathcal{L}) \rightarrow X$ whose fibre over $x \in X$ is isomorphic to the projectivised vector space $\mathbb{P}(\mathcal{L}_{x})$.