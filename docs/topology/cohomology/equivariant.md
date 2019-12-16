---
lang: en-GB
---

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
    p_{X} : X \times E \rightarrow X
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
    p_{E} : X \times E \rightarrow E
$$
onto the second factor gives rise to a map
$$
    (X \times E) / G \rightarrow E/G.
$$
The composition of this projection along with the section $s$ gives rise to a map
$$
    f := s \circ p : X/G \rightarrow E / G.
$$
Let
$$
        q_{X} : X \rightarrow X / G,\qquad q_{E} : E \rightarrow E / G,
$$
be the projections of $X$ and $E$ onto their quotient spaces under the respective $G$-action.

::: warning Proposition
Suppose that $G$ acts freely on $X$ and that $E$ is a contractible space on which $G$ acts freely. Any cross-section $s : X / G \rightarrow (X \times E) / G$ determines a unique $G$-equivariant map
$$
    h : X \rightarrow E
$$
which makes the diagram
(insert diagram)
commute.

Convsersely, any $G$-equivariant map $h : X \rightarrow E$ determines a section $s : X/G \rightarrow (X \times E) / G$ and a map $f$ which makes the above diagram commute.

Any two such sections are homotopic and hence the homotopy class of $(f,h)$ is unique, independent of the choice of $s$.
:::

This proposition is usually stated as a theorem about principal bundles: since $G$ acts freely on $X$we can consider $X$ as a principal bundle over
$$
    Y := X/G.
$$
Similarly we can regard $E$ as a principal bundle over
$$
    B := E/G.
$$
Then the above proposuition is equivalent to the following "classification theorem" for principal bundles:

::: warning Theorem
Let $Y$ be a topological space and $\pi : X \rightarrow Y$ a principal $G$-bundle. THen there exists a map
$$
    f : Y \rightarrow B
$$
and an isomorphism of principal bundles
$$
    \Phi : X \rightarrow f^{\ast}E
$$
where $f^{\ast}E$ is the pull-back of the bundle $E \rightarrow B$ to $Y$. Moreover $f$ and $\Phi$ are unique up to homotopy.
:::

This theorem can be reformulated as saying that there is a one-to-one correspondence between equivalence classes of principal $G$-bundles and homotopy classes of mappings $f : Y \rightarrow B$. In other words, the theorem reduces the classification problem for principal $G$-bundles over $Y$ to the homotopy problem of classifying maps of $Y$ into $B$ up to homotopy. For this reason the space $B$ is called the __classifying space__ for $G$ and the bundle $E \rightarrow B$ is called the __classifying bundle__.

An important consequence of the above theorem is the following:

::: warning Theorem
If $E_{1}$ and $E_{2}$ are contractible spaces on which $G$ acts freely, they are equivalent as $G$-spaces. _I.e._, there exist $G$-equivariant maps
$$
    \phi_{1}: E_{1} \rightarrow E_{2},\qquad \psi : E_{2} \rightarrow E_{1},
$$
with $G$-equivariant homotopies
$$
    \psi \circ \phi \simeq \id_{E_{1}},\qquad \phi \circ \psi \simeq \id_{E_{2}}.
$$
:::

::: warning Corollary
The definition
$$
    H_{G}^{\ast}(X) := H^{\ast}\big( (X \times E) / G \big)
$$
is independent of the choice of $E$.
:::

### Existence of Classifying Spaces

The previous section asserts that our definition of equivariant cohomology does not depend on which $E$ that we choose. However, it is still needed to be shown that such an $E$ exists, _i.e_ given a compact Lie group $G$ can we find a contractible space $E$ on which $G$ acts freely? If $G$ is a subgroup of a compact Lie group $K$ and also if we have found an $E$ that works for $K$, then restricting the $K$-action to the subgroup $G$ produces a free $G$-action. Every compact Lie group has a faithful linear representation, meaning that it can be embedded as a subgroup of $U(n)$ for large enough $n$. Thus it suffices to construct a space $E$ which is contractible and on which $U(n)$ acts freely.

Let $V$ be a infinite-dimensional separable Hilbert space, say take
$$
    V = L^{2}[0,\infty),
$$
the space of square-integrable functions on the positive real number line, relative to the Lebesgue measure (any separable Hilbert space is isomorphic to one another).

Let $E$ consist of the set of all $n$-tuples
$$
    \boldsymbol{v} = (v_{1},\ldots, v_{n}),\quad v_{i} \in V,\quad (v_{i},v_{j}) = \delta_{ij}.
$$
The group $U(n)$ acts on $E$ by
$$
    A\boldsymbol{v} = \boldsymbol{w} = (w_{1},\ldots, w_{n}),\quad w_{i} = \sum_{j} a_{ij}v_{j},
$$
and this action is clearly free.

::: warning Proposition
The space $E$ is contractible.
:::

Thus, with this proposition in hand, for any compact Lie group there exists a classifying space $E$ on which $G$ acts freely.