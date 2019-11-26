# Category Theory

## Constructions

### Coproduct

Let $\mathcal{C}$ be a category and let $X,Y$ be objects in this category. An object is called the _coproduct_ of these two objects, written as $X \oplus Y$ or $X \sqcup Y$, if there exist morphisms $i_{X}: X \rightarrow X \oplus Y$ and $i_{Y}: Y \rightarrow X \oplus Y$ satisfying a [universal property](./placeholder): for any object $Z$ and morphisms $f_{X}: X \rightarrow Z$ and $f_{Y}: Y \rightarrow Z$, there xsits a unique morphism $f: X \oplus Y \rightarrow Z$ such that $f_{X} = f \circ i_{X}$ and $f_{Y} = f \circ i_{Y}$.