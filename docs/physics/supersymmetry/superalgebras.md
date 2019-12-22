# Superalgebras

## Basic Definitions

The adjective _"super"_ with regards to mathematical structures means that all vector spaces and algebras are graded over $\ZZ/2\ZZ$. So a __supervector space__ is a vector space $V$ with a $\ZZ/2\ZZ$ gradation,
$$
    V \cong V_{0} \oplus V_{1},
$$
where $\ZZ/2\ZZ = \{ 0, 1 \}$ in the obvious notation. An element of $V_{0}$ is called __even__ and an element of $V_{1}$ is called __odd__. Slightly more generally, vector spaces will come with a $\ZZ$-gradation
$$
    V \bigoplus_{i \in \ZZ} V_{i},
$$
where now we understand elements of $V_{2j}$ as being even,
$$
    V_{0} := \bigoplus V_{2j},
$$
and elements of $V_{2j+1}$ as being odd,
$$
    V_{1} := \bigoplus V_{2j+1}.
$$
An element of $V_{i}$ is said to have __degree__ $i$.

::: tip Definition
A __superalgebra__ is a supervector space $A$ with a multiplication satisfying
$$
    A_{i} \cdot A_{j} \subset A_{i+j},
$$
if $A$ is $\ZZ$-graded.
:::

::: tip Examples

- The __(super)commutator__ of two endomorphisms of a (super)vector space is defined as
$$
    [L,M] := LM - (-1)^{ij}ML,\quad \text{if } L \in \End_{i}V,\quad M \in \End_{j}V.
$$
More generally, the commutator of any two elements in any associative superalgebra is defined in exactly the same way.

- An associative algebra is called __(super)commutative__ if the commutator of any two elements vanishes. As an example, the algebra $\Omega(M)$ of all differential forms on a manifold is a commutative superalgebra.
:::

## Lie Superalgebras

::: definition
A ($\ZZ$-graded) __Lie superalgebra__ is a $\ZZ$-graded vector space
$$
    h = \bigoplus_{i \in \ZZ} h_{i}
$$
equipped with a bracket operation
$$
    [-,-] : h_{i} \times h_{j} \longrightarrow h_{i+j}
$$
which is (super) anti-commutative in the sense that
$$
    [u,v] + (-1)^{ij}[v,u] = 0,\quad \text{for all } u \in h_{i},\, v \in h_{j},
$$
and satisfies the __super version of the Jacobi identity__
$$
    [u,[v,w]] = [[u,v],w] + (-1)^{ij}[v,[u,w]],\quad \text{for all } u \in h_{i}, v\in h_{j}.
$$
:::

If $\mfg$ is an ordinary Lie algebra in the old-fashioned sense, with a chosen basis $\xi_{1},\ldots \xi_{n}$ of $\mfg$, then we define $\tilde{\mfg}$ to be the Lie superalgbera
$$
    \tilde{\mfg} := \mfg_{-1} \oplus \mfg_{0} \oplus \mfg_{1}
$$
where $\mfg_{-1}$ is an $n$-dimensional vector space with basis $\imath_{1},\ldots,\imath_{n}$; where $\mfg_{0}$ is an $n$-dimensional vector space with basis $L_{1},\ldots, L_{n}$; and where $\mfg_{1}$ is a one-dimensional vector space with basis $d$. These basis elements will be defined in the next subsection.

The bracket is defined in terms of this basis by (insert - pg. 13).

A basis-free description of the Lie superalgebra $\tilde{\mfg}$ is the following: the assertion
$$
    \tilde{\mfg}  = \mfg_{-1} \oplus \mfg_{0} \oplus \mfg_{1}
$$
as a $\ZZ$-graded algebra implies that
$$
    [\mfg_{-1},\mfg_{-1}] = 0\quad \text{and} \quad [\mfg_{1},\mfg_{1}] = 0.
$$
The subalgebra $\mfg_{0}$ is isomorphic to $\mfg$; if we denote a typical element of $\mfg_{0}$ by $L_{\xi}$, for $\xi \in \mfg$, then
$$
    [L_{\xi}, L_{\eta}] = L_{[\xi,\eta]}
$$
gives the bracket $[-,-] : \mfg_{0} \times \mfg_{0} \ra \mfg_{0}$. The space $\mfg_{-1}$ is isomorphic to $\mfg$ as a vector spacem and $[-,-] : \mfg_{0} \times \mfg_{-1} \ra \mfg_{-1}$ is the adjoint representation: if we denote an element of $\mfg_{-1}$ by $\imath_{\eta}$, for $\eta \in \mfg$, then
$$
    [L_{\xi}, \imath_{\eta}] = \imath_{[\xi,\eta]}.
$$
The bracket $[-,-] : \mfg_{0} \times \mfg_{1} \ra \mfg_{1}$ is $0$, and the bracket $[-,-] : \mfg_{-1} \times \mfg_{1} \ra \mfg_{0}$ is given by 
$$
    [\imath_{\xi}, d] = L_{\xi}.
$$

## Derivations

::: definition
If $A$ is a (not necessarily associative) superalgebra, then $\Der(A)$ is the subspace of $\End(A)$, where
$$
    \Der_{\bfk}(A) \subset \End_{\bfk}(A)
$$
consists of the endomorphisms $D$ which satisfy
$$
    D(uv) = (Du)v + (-1)^{\bfk\bfm}u(Dv),\quad \text{when } u \in A_{\bfm}.
$$
Similarly for the $\ZZ$-graded case. An element of $\Derk_{\bfk}(A)$ is called a __derivation__ of degree $\bfk$, regardless of whether it is even or odd.
:::

## Other Constructions

::: example
If $A$ and $B$ are (super)algebras, the product law on $A \otimes B$ is defined by
$$
    (a_{1} \otimes b_{1}) \cdot (a_{2} \otimes b_{2}) = (-1)^{ij}a_{1}a_{2} \otimes b_{1}b_{2}
$$
where $\deg a_{2} = i$ and $\deg b_{1} = j$. With this definition, the tensor product of two commutative algebras is again commutative. Our definition of multiplication is the unique definition such that the maps
$$
    \begin{aligned}
        A \ra A \otimes B,\qquad &a \mapsto a \otimes 1, \\
        B \ra A \otimes B,\qquad &b \mapsto 1 \otimes b,
    \end{aligned}
$$
are algebra monomorphims and such that
$$
    (a\otimes 1) \cdot (1 \otimes b) = a \otimes b.
$$
:::

::: example
As an example of the above, let $V$ and $W$ be ordinary vector spaces. We can choose a basis $e_{1}, \ldots, e_{m}, f_{1},\ldots f_{n}$ of $V \oplus W$ with the $e_{i} \in V$ and the $f_{j} \in W.$ Thus monomials of the form
$$
    e_{i_{1}} \wedge \ldots \wedge e_{i_{k}} \wedge f_{j_{1}} \wedge \ldots \wedge f_{j_{l}}
$$
constitute a basis of $\wedge(V\oplus W)$. This shows that in our category of superalgebras, we have that $\wedge(V \oplus W) = \wedge(V) \otimes \wedge(W)$. If $M$ and $N$ are smooth manifolds, then $\W(M) \otimes \W(N)$ is a subalgebra of $\W(M \times N)$, which is dense in the $C^{\infty}$ toplogy.
:::

::: remark
The above definition of the tensor product of two superalgebras and the respective multiplication has the following universal property: let
$$
    u:  A \ra C,\qquad v : B \ra C,
$$
be two morphisms of superalgebras such that
$$
    [u(a), v(b)] = 0,\qquad \text{for all } a \in A, b \in B.
$$
Then there exists a unique superalgebra morphism
$$
    w : A \otimes B \ra C
$$
such that
$$
    w(a \otimes 1) = u(a),\qquad w(1 \otimse b) = v(b).
$$
:::