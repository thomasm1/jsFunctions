 
# MAP  
### webpack 
### serve -s 
map projection
## ckmeans algorithm from the simple-statistics package to cluster our data. we pick the minimum value of each cluster as a break. we then use these breaks with a quantile scale to map values in the data to colors on the choropleth map.

### Breaks
Breaks methods split datasets into chunks. Often these are used for segmentation or visualization of a dataset. A method of computing breaks that splits data evenly can make for a better choropleth map, for instance, because each color will be represented equally.

### ckmeans
Ckmeans clustering is an improvement on heuristic-based clustering approaches like Jenks. The algorithm was developed in Haizhou Wang and Mingzhou Song as a dynamic programming approach to the problem of clustering numeric data into groups with the least within-group sum-of-squared-deviations.

### Minimizing the difference within groups - what Wang & Song refer to as withinss, or within sum-of-squares, means that groups are optimally homogenous within and the data is split into representative groups. This is very useful for visualization, where you may want to represent a continuous variable in discrete color or style groups. This function can provide groups that emphasize differences between data.

### Being a dynamic approach, this algorithm is based on two matrices that store incrementally-computed values for squared deviations and backtracking indexes.

### This implementation is based on Ckmeans 3.4.6, which introduced a new divide and conquer approach that improved runtime from O(kn^2) to O(kn log(n)).

### Unlike the original implementation, this implementation does not include any code to automatically determine the optimal number of clusters: this information needs to be explicitly provided.

#### References

#### Ckmeans.1d.dp: Optimal k-means Clustering in One Dimension by Dynamic Programming Haizhou Wang and Mingzhou Song ISSN 2073-4859


#### from The R Journal Vol. 3/2, December 2011
