i=0
for filename in Artwork*
do
	mv $filename poke$i.png
	i=$((i+1))
done