# Equivariant Theory

## The Weil Algebra

### The Koszul Complex

Let $V$ be an $n$-dimensional vector space, and let $\wedge = \wedge(V)$ be the exterior algebra of $V$ considered as a commutative [superalgebra](../../physics/supersymmetry/superalgebras.md), and let $S = S(V)$ be the symmetric algebra considered as an algebra all of whose elements are even. So we assign to each element of $\wedge(V)$ its exterior degree, but each element of $S^{k}(V)$ is assigned the degree $2k$. The elements $x \otimes 1 \in \wedge^{1} \otimes S^{0}$ and $1 \otimes x \in \wedge^{0} \wedge S^{1}$ generate $\wedge \otimes S$.

::: definition
The __Koszul algebra__ is the tensor product $\wedge \otimes S$, and the __Koszul operator__ $d_{K}$ is defined as the derivation extending the operator on the generators given by
$$
    d_{K}(x \otimes 1) = 1\otimes x,\qquad d_{K}(1 \otimes x) = 0.
$$
:::
Clearly $d_{K}^{2} = 0$ on the generators, and hence everywhere, since $d_{K}^{2}$ is a derivation. We can use this same argument, and the fact that the commutator of two odd derivations is an even derivation, to prove that the Koszul operator is [acyclic](../../algebra/co-homological/g-star-modules.md). Indeed, let $Q$ be the derivation defined on generators by
$$
    Q(x \otimes 1) = 0,\qquad Q(1 \otimes x) = x \otimes 1.
$$
So $Q^{2} = 0$ and $[Q,d_{K}] = \id$ on generators. But since $[Q,d_{K}]$ is an even derivation, conclude that
$$
    [Q,d_{K}] = (k+l)\cdot \id,\qquad \text{on } \wedge^{k} \otimes S^{l}.
$$
Thus the only cohomology of $d_{K}$ lies in $\wedge^{0} \otimes S^{0}$, which is the field of scalars. In fact the cohomology is _equal_ to the field of scalars, since $d_{K} 1 = 0$.

It will be convenient to write all of this in terms of a basis. Let $x^{1},\ldots, x^{n}$ be a basis of $V$ and define
$$
    \theta^{i} := x^{i} \otimes 1
$$
and
$$
    z^{i} := 1 \otimes x^{i}.
$$
Then the Kozsul operator $d = d_{K}$ is expressed in terms of these generators as
$$
    d\theta^{i} = z^{i},\quad \text{and} \quad dz^{i} = 0.
$$
The operator $Q$ isgiven by
$$
    Qz^{i} = \theta^{i},\qquad Q\theta^{i} = 0.
$$

### The Weil Algebra
