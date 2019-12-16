# Supersymmetry

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
    A_{i} \cdot A_{j} \subset A_{i+j}.
$$
:::

