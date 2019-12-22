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
If the morphism is even (especially if it is of degree zero which will often be the case), one can say that $f$ preserves the $G^{\ast}$ action, or that the operators $\rho, L_{\xi}, \imath_{\xi}$, and $d$ are equivariant with respect to $f$.

The composition of two $G^{\ast}$ morphisms is again a $G^{\ast}$ module morphism, and hence the set of $G^{\ast}$ module morphisms is a category. Further, we define a morphism between $G^{\ast}$ algebras to be a map $f : A \ra B$ which is an algebra morphism, and satisfies the four equations above. This makes the set of $G^{\ast}$ algebras into a category too. Similar analogous definitions exist of $\ZZ$-graded $G^{\ast}$ modules, algebras, and morphisms.

If we have a $G$-action on a manifold $M$, then $\W(M)$ is a $G^{\ast}$ algebra in a canonical way. If $M$ and $N$ are $G$-manifolds and $F:M \ra N$ is a $G$-equivariant smooth map, then the pullback map $F^{\ast} : \W(M) \ra \W(N)$ is a morphism of $G^{\ast}$ algebras. Thus the category of $G^{\ast}$ algebras can be considered as an algebraic generalisation of the category of $G$-manifolds.

### Cohomology

By definition, the element $d$ acts as a derivation of degree $+1$ with $d^{2} = 0$ on $A$. So $A$ is a cochain complex. We define $H(A) := H(A,d)$ to be the cohomology of $A$ relative to the differential $d$. In the case when $A = \W(M)$, de Rham's theorem says that this is equal to $H^{\ast}(M)$.

::: remark
(to be added - page 19)
:::

### Acyclicity

If $M$ is contractible, the de Rham complex $(\W(M), d)$ is __acyclic__, _i.e._, $A = \W(M)$ satisfies
$$
    H^{k}(A,d) = \begin{cases}
        \FF,\quad &k = 0, \\
        0,\quad &k \neq 0,
    \end{cases}
$$
where $\FF$ is the ground field, which is $\CC$ in our case. We take this as the definition of acyclicity for a general $A$.

### Chain Homotopies

::: definition
Let $A$ and $B$ be two $G^{\ast}$ modules. A linear map
$$
    Q : A \ra B
$$
is called a __chain homotopy__ if it is odd, $G$-equivariant, and satisfies
$$
    \imath_{\xi} Q + Q \imath_{\xi} = 0,\qquad \text{for all } \xi \in \mfg.
$$
:::
If $A$ and $B$ are $\ZZ$-graded (as is typical) we require that $Q$ be of degree $-1$ in the $\ZZ$-gradation. The $G$-equivariance implies that
$$
    L_{\xi} Q - Q L_{\xi} = 0,\qquad \text{for all } \xi \in \mfg.
$$

::: proposition
If $Q : A \ra B$ is a chain homotopy, then
$$
    \tau := dQ + Qd
$$
is a morphism of $G^{\ast}$ modules.
:::

::: definition
We say that two morphisms $\tau_{0}, \tau_{1} : A \ra B$ are __chain homotopic__ (notation: $\tau_{0} \simeq \tau_{1}$) if there is a chain homotopy $Q : A \ra B$ such that
$$
    \tau_{1} - \tau_{0} = Qd + dQ.
$$
:::

::: remark
This implies that the induced maps on cohomology are equal:
$$
    \tau_{0} \simeq \tau_{1} \implies \tau_{0\ast} = \tau_{1\ast}.
$$
:::

::: definition
(finish __chain homotopy relative to...__ - page 22).
:::

### Free and Locally Free Actions

::: definition
An action of $G$ on $M$ is said to be __locally free__ if the corresponding infinitesimal action of $\mfg$ is free, _i.e._, if, for every $\xi \neq 0 \in \mfg$, the vector field $\xi_{M}^{-}$ generating the one-parameter group $t \mapsto \exp(-t\xi)$ of transformations on $M$ is nowhere vanishing.
:::
If the action is locally free, we can find linear differential forms $\theta^{1},\ldots, \theta^{n}$ on $M$ which are everywhere dial to our basis $\xi_{1},\ldots, \xi_{n}$ in the sense that
$$
    \imath_{a} \theta^{b} = \delta_{a}^{b}.
$$
Conversely, if we have a $G$-action on a manifold on which there exist forms $\theta^{a}$ satisfying the above equation, then the action is locally free.

A linear differential form $\w$ is called __horizontal__ if it satisfies
$$
    \imath_{a}\w = 0,\qquad a = 1,\ldots, n.
$$


















