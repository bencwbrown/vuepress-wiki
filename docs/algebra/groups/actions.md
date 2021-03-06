# Group Actions

Let $G$ be a group and $X$ be a set. An _action_ of the group $G$ on the set $X$ is defined as a function $\alpha: G \times X \rightarrow X$, which satisfies the following two properties:
- $\alpha(gh,x) = \alpha(g, \alpha(h,x)),\qquad \text{for all } g,h \in G, \text{ for all } x \in X;$
- $\alpha(e_{G},x) = x,\qquad \text{for all } x \in X.$

# Linear Algebraic Groups

## Affine Algebraic Group

An _affine algebraic group_ over $k$ is an affine variety $G$ (not necessarily irreducible) over $k$, whose set of points has a group structure such that group multiplication $m: G \times G \rightarrow G$ and inversion $i : G \rightarrow G$ are morphisms of affine varieties.

::: tip Linear Algebraic Group
Every affine algebraic group over $k$ is isomorphic to a linear algebraic group over $k$. So we shall use the terms "linear algebraic group" and "affine algebraic group" interchangeably.
:::

## Borel Subgroup

A _Borel subgroup_ $B$ of a linear algebraic group $G$ over $k$ is a maximal connected solvable linear algebraic subgroup $B$ of $G$.

# Coxeter Groups

## Group Presentations

A _group presentation_ $\langle A | R \rangle$ is made up of a set $A$ of _generators_ and a set $R$ of relations. Here a relation is an expression of the form $w_{1} = w_{2}$, where $w_{1}$ and $w_{2}$ are elements of the free group $F(A)$. The group $\langle A | R \rangle$ is then defined as the quotient group of the free group $F(A)$ on the generating symbols from $A$, by the normal subgroup generated by all $w_{1}w_{2}^{-1}$ for each expression $w_{1} = w_{2}$ occuring in $R$.

A group presentation $\langle A | R \rangle$ is said to be _finite_ if both $A$ and $R$ are finite. It is said to be a _presentation of_ $G$ if $G$ is a group isomorphic to $\langle A | R \rangle$. A group is called _finitely presented_ if it has a finite presentation.

::: tip Example

A presentation for the cyclic group of infinite order, i.e. the free group on one generator is
$$
    \langle \{ a \} | \{ \} \rangle,
$$
and is a presentation of the group $\mathbb{Z}_{\geq 0}$.

Adding the relation $a^{n} = 1$, we then get the cyclic group of order $n$,
$$
    \langle \{a\} | \{ a^{n} = 1 \} \rangle.
$$
This of group is a group presentation of the additive group $\mathbb{Z} /n\mathbb{Z}$ of integers modulo $n$. )
:::





