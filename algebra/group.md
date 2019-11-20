# Group Theory

## Actions

## Group Action

Let $G$ be a group and $X$ be a set. An _action_ of the group $G$ on the set $X$ is defined as a function $\alpha: G \times X \rightarrow X$, which satisfies the following two properties:
- \alpha(gh,x) = \alpha(g, \alpha(h,x)),\qquad \text{for all } g,h \in G, \text{ for all } x \in X;
- \alpha(e_{G},x) = x,\qquad \text{for all } x \in X.

### Free Action

### Semifree Action




## Linear Algebraic Groups

### Affine Algebraic Group

An _affine algebraic group_ over $k$ is an affine variety $G$ (not necessarily irreducible) over $k$, whose set of points has a group structure such that group multiplication $m: G \times G \rightarrow G$ and inversion $i : G \rightarrow G$ are morphisms of affine varieties.

::: tip Linear Algebraic Group
Every affine algebraic group over $k$ is isomorphic to a linear algebraic group over $k$. So we shall use the terms "linear algebraic group" and "affine algebraic group" interchangeably.
:::

### Borel Subgroup

A _Borel subgroup_ $B$ of a linear algebraic group $G$ over $k$ is a maximal connected solvable linear algebraic subgroup $B$ of $G$.