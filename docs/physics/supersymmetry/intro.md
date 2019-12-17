# Introduction

## Superalgebras

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

- A ($\ZZ$-graded) __Lie superalgebra__ is a $\ZZ$-graded vector space
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