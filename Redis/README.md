# Redis

## SET

```
set name tunahan

returns OK
```

## GET

```
get name

returns "tunahan"
```

## DEL

```
del name

if success returns 1
```

## EXISTS

```
exists name

if exists returns 1
else returns 0
```

## KEYS \*

```
keys *

returns all keys
```

## FLUSHALL

```
flushall

deletes all data
```

## TTL

```
ttl name

time to leave
returns left expire of the key
```

## EXPIRE

```
expire name 10

define expire time to the key that exists
```

## SETEX

```
setex name 10 tunahan

sets data with expire time
```

## LPUSH

```
lpush friends can

push data to array (to left)
```

## RPUSH

```
rpush friends mustafa

push data to array (to right)
```

## LPOP

```
lpop friends

pop data from array (from left)
```

## RPOP

```
rpop friends

pop data from array (from right)
```

## LRANGE

```
lrange friends 0 -1

lists array items
returns
"mustafa"
"tunahan"
"can"
```

## SADD

```
sadd hobbies "runnig"

add data to set
```

## SMEMBERS

```
smembers hobbies

lists set items
```

## SREM

```
srem hobbies "running"

remove data from set
```

## HSET

```
hset person name tunahan
hset person age 22

set object and properties
```

## HGET

```
get person name

set object and properties
```

## HGETALL

```
hgetall person

returns keys and values
"name"
"tunahan"
"age"
"22"
```

## HDEL

```
hdel person age

deletes object property
```
