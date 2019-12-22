# G* Modules

## From Geometry to Algebra

Let $G$ be any Lie group, let $\mfg$ be its Lie algebra, and $\tilde{\mfg}$ be the corresponding Lie [superalgebra](./superalgebras.md).

::: definition
A $G^{\ast}$ __algebra__ is a commutative superalgebra $A$, together with a representation $\rho$ of $G$ as automorphisms of $A$ and an action of $\tilde{\mfg}$ as (super)derivations of $A$ which are consistent in the sense that
$$
    \begin{aligned}
        \frac{d}{dt} \rho(\exp t\xi)|_{t=0} &= L_{\xi} \\
        \rho(a) L_{\xi}\rho(a^{-1}) &= L_{\Ad_{a}}\xi \\
        \rho(a) \imath_{\xi} \rho(a^{-1}) &= \imath_{\Ad_{a}}\xi \\
        \rho(a) d \rho(a^{-1}) &= d
    \end{aligned}
$$
for all $a \in G$, $\xi \in \mfg$.

A $G^{\ast}$ __module__ is a supervector space $A$ together with a linear representation of $G$ on $A$ and a homomorphism $\tilde{\mfg} \ra \End(A)$ such that the conditions above hold. So a $G^{\ast}$ algebra is a commutative superalgebra which is a $G^{\ast}$ module with the additional condition that $G$ acts as algebra automorphisms and $\tilde{\mfg}$ acts as superderivations.
:::

In order to make the set of $G^{\ast}$ modules and the set of $G^{\ast}$ algebras into category, we must first define what is meant by a morphism. So let $A$ and $B$ be $G^{\ast}$ modules and let $f : A \ra B$ be a (continuous) linear map.

::: definition
We say that $f$ is a __morphism__ of $G^{\ast}$ modules if for all $x \in A$, $a \in G$, $\xi \in \mfg$, we have
$$
    \begin{aligned}
        [\rho(a), f] &= 0 \\
        [L_{\xi}, f] &= 0 \\
        [\imath_{\xi}, f] &= 0 \\
        [d,f] &= 0.
    \end{aligned}
$$
If, for all $i$,
$$
    f: A_{i} \ra B_{i+k}
$$
we say that $f$ has __degree__ $k$, with similar notation for the $(\ZZ/2\ZZ)$-graded case. We say that a morphism of degree $\bfk$ is __even__ if $\bfk = \bf0$ and __odd__ if $\bfk = \bf1$.
:::