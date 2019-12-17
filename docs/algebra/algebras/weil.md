# The Weil Algebra

## The Koszul Complex

Let $V$be an $n$-dimensional vector space, and leg $\wedge = \wedge(V)$ be the exterior algebra of $V$ considered as a commutative [superalgebra](../physics/supersymmetry.md), and let $S = S(V)$ be the symmetric algebra considered as an algebra all of whose elements are even. So each element of $\wedge V$ is assigned its exterior degree, but each element of $S^{k}(V)$ is assigned the degree $2k$.

::: tip Definition
The __Koszul algebra__ is the tensor product $\wedge \otimes S$.
:::

The elements $x \otimes 1 \in \wedge^{1} \otimes S^{0}$ and $1 \otimes x \in \wedge^{0} \otimes S^{1}$ generate $\wedge \otimes S$. The __Koszul operator__ $d_{K}$ is defined as the derivation extending the operator on generators given by
$$
    d_{K}(x \otimes 1) = 1 \otimes x,\quad d_{K}(1 \otimes x) = 0.
$$
So clearly $d_{K}^{2} = 0$ on generators, and hence everywhere since $d_{K}^{2}$ is a derivation.