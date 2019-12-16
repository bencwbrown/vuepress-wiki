# Equivariant Cohomology

## Motivation

Let $G$ be a compact Lie group acting on a topological space $X$. If $G$ acts freely on $X$ then the quotient space $X/G$ is usually as nice a topological space as $X$ is itself, _i.e._ say if $X$ is a manifold then so it $X/G$. The motivation for definition of the equivariant cohomology group $H_{G}^{\ast}(X)$ is that, should $G$ act freely on $X$, then the equivariant cohomology groups of $X$ should be just the usual cohomology groups for $X/G$:
$$
    H_{G}^{\ast}(X) = H^{\ast}(X/G),\quad \text{when the action is free.}
$$

:::  tip Remark
If we let $G$ act on itself by left multiplication then this implies that
$$
    H_{G}^{\ast}(G) = H^{\ast}(\{\text{pt}\}).
$$
:::

When the action of $G$ is not free however, the space $X/G$ might be somewhat pathological from the point of view of a cohomology theory. The equivariant cohomology groups $H_{G}^{\ast}(X)$ are meant to be the most appropriate substitutes for $H^{\ast}(X/G)$.

## Via Classifying Bundles

As cohomology is unchanged by homotopy equivalence, the equivariant cohomology of $X$ should be the ordinary cohomology of $X^{\ast}/G$, where $X^{\ast}$ is a topological space homotopy equivalent to $X$, and on which $G$ acts freely. To construct such a space, we can take the product $X^{\ast} = X \times E$ where $E$ is a contractible space on which $G$ acts freely. Then the standard way of defining the equivariant cohomology groups of $X$ is by:

:::  tip Definition
The equivariant cohomology groups of a manifold $X$ with respect to a Lie group $G$ is
$$
    H_{G}^{\ast}(X) := H^{\ast}\big( (X \times E) / G \big),
$$
where $E$ is any contractible space on which $G$ acts freely.
:::

### Independence of $E$

To show that the definition does not depend on the choice of $E$, we first note that if $G$ acts freely on $X$ then the projection
$$
    X \times X \rightarrow X
$$
onto the first factor gives rise to a map
$$
    (X \times E)/G \rightarrow X/G
$$
which is a fibration with typical fibre $E$. As $E$ is contractible, we have that
$$
    H_{G}^{\ast}(X) = H^{\ast}\big( (X \times E) / G \big) = H^{\ast}(X/G),
$$
which is a property that we require. Also since the above contruction gives rise to a fibre bundle over $X/G$ with contractible fibre, it admits a global cross-section
$$
    s: X/G \rightarrow (X \times E)/G.
$$
The projection
$$
    X \times E \rightarrow E
$$
onto the second factor gives rise to a map
$$
    (X \times E) / G \rightarrow E/G.
$$ 