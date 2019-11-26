# Varieties

## Quasi-Projective Varieties

### Quasi-Projective Varieties

A _quasi-projective variety_ is a locally closed subset of $\mathbb{P}^{n}$, considered witht the Zariski topology induced from $\mathbb{P}^{n}$. A _locally closed set_ of any topological space is a closed subset of an open subspace, that is, an intersection of an open set and a closed set.

:::  tip Examples
The class of quasi-projective varieties includes all projective varieties, all affine varieties, and all Zariski open subsets of these.
:::

### Morphisms

Let $V \subseteq \mathbb{P}^{n}$ and $W \subseteq \mathbb{P}^{m}$ be quasi-projective varieties. A _morphism_ $F: V \rightarrow W$ is a map such that for each $p \in V$, there exist $m+1$ homogeneous polynomials $F_{0},\ldots, F_{m}$ in $n+1$ variables such that the map
$$ V ⟶ \mathbb{P}^{m},\qquad q ⟼ [F_{0}(q): \ldots : F_{m}(q)],$$
is well-defined at $p$ and agress with $F$ on some non-empty open set containing $p$.

## Birational Geometry

### Projective Morphisms

A morphism of varieties $\pi : X \rightarrow V$ is called a _projective morphism_ if $X$ is a closed subvariety of a product variety $X \subset V \times \mathbb{P}^{n}$ and $\pi : X \rightarrow V$ is the restricion of the projection onto the first coordinate.

::: tip Remark
Projective morphisms have the property that the preimage of any point is a projective variety. A projective morphism is a _proper morphism_ in the Euclidean topology.
:::

### Birational Morphisms

A morphism $\pi : X \rightarrow V$ of quasi-projective varieties is called a _birational morphism_ if its restriction to some dense open set $U \subset X$ is an isomorphism onto some dense open subset $U^{\prime} \subset V$.

::: tip Example
The blow-up of a point in $n$-dimensional affine space $\mathbb{A}^{n}$ is an example of a birational morphism.
:::

### Rational Maps

Let $X$ be a quasi-projective variety, and let $U$ and $U^{\prime}$ be dense open subsets of $X$. Suppose we are given two morphisms $\varphi : U \rightarrow Y$ and $\varphi^{\prime} : U^{\prime} \rightarrow Y$ of quasi-projective varieties. We say that $(U,\varphi)$ and $(U^{\prime}, \varphi^{\prime})$ are _equivalent_ if the mappings $\varphi$ and $\varphi^{\prime}$ coincide on the intersection $U \cap U^{\prime}$.

A _rational map_ $X ⇢ Y$ is an equivalence class of morphisms defined on dense open sets of $X$ as above.

::: tip Example
Projecting from a point in projective space is an example of a rational map. Let $H \subset \mathbb{P}^{n}$ be a fixed hyperplane in $\mathbb{P}^{n}$ and let $p \in \mathbb{P}^{n}$ be any point **not** on $H$. The _projection_ from $p$ onto the hyperplane $H$ is the rational map

$$\varphi : \mathbb{P}^{n} ⇢ H = \mathbb{P}^{n-1},\qquad x ⟼ φ(x) := \{ \text{the unique intersection point of $H$ and the line $\overline{xp}$} \}.$$

The rational map is a well-defined morphism everywhere outside $p$.
:::

### Birational Equivalence

Let $X$ and $Y$ be irreducible algebraic varieties. They are called _birationally equivalent_ if there a re mutually inverse rational maps
$$ F: X ⇢ Y\qquad \text{and} \qquad G: Y ⇢ X.$$

::: tip Remark
This 
:::